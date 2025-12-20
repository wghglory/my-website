import {expect, test} from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('/');
  });

  test('page loads successfully with correct title', async ({page}) => {
    await expect(page).toHaveTitle(/Guanghui Wang Website/);
  });

  test('header is visible and contains navigation', async ({page}) => {
    const header = page.locator('header, [role="banner"]').first();
    await expect(header).toBeVisible();

    // Check desktop navigation links
    const navLinks = page.locator('nav a[href]');
    await expect(navLinks.first()).toBeVisible();

    // Check logo
    const logo = page.locator('h1[aria-label*="Guanghui"]');
    await expect(logo).toBeVisible();
  });

  test('hero section displays correctly', async ({page}) => {
    const heroSection = page.locator('section#home');
    await expect(heroSection).toBeVisible();

    // Check hero text content
    await expect(page.locator('text=Web Developer Loving')).toBeVisible();
    await expect(page.locator('text=Angular')).toBeVisible();
    await expect(page.locator('text=React')).toBeVisible();
    await expect(page.locator('text=Vue')).toBeVisible();
    await expect(page.locator('text=/Hi 👋.*Guanghui Wang/i')).toBeVisible();

    // Check social icons (scoped to hero section to avoid footer duplicates)
    const githubLink = heroSection.locator('a[aria-label="go to github"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/wghglory');
    await expect(githubLink).toHaveAttribute('target', '_blank');

    const linkedinLink = heroSection.locator('a[aria-label="go to linkedin"]');
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/guanghuiwang/');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');

    const emailLink = heroSection.locator('a[aria-label="send email"]');
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute('href', 'mailto:guanghui-wang@foxmail.com');
  });

  test('company logos are displayed', async ({page}) => {
    // Wait for company logos section to be visible
    const logosSection = page.locator('section#home .bg');
    await expect(logosSection).toBeVisible();

    // Check for SVG logos (company logos are SVG elements)
    const svgLogos = page.locator('section#home .bg svg');
    const count = await svgLogos.count();
    expect(count).toBeGreaterThan(0);
  });

  test('experience section is visible', async ({page}) => {
    const experienceSection = page.locator('section#experience');
    await expect(experienceSection).toBeVisible();

    // Check experience title
    await expect(page.locator('text=/10\\+.*Year Experience/i')).toBeVisible();
  });

  test('projects section displays correctly', async ({page}) => {
    const projectSection = page.locator('section#project');
    await expect(projectSection).toBeVisible();

    // Check section title (scoped to project section to avoid nav/footer duplicates)
    await expect(projectSection.locator('h2:has-text("Projects")')).toBeVisible();

    // Check for project carousel/swiper
    const swiper = page.locator('.swiper, .mySwiper');
    await expect(swiper.first()).toBeVisible();

    // Check "View more" link
    const viewMoreLink = page.locator('a:has-text("View more")');
    await expect(viewMoreLink).toBeVisible();
    await expect(viewMoreLink).toHaveAttribute('href', '/projects');
  });

  test('footer is visible', async ({page}) => {
    const footer = page.locator('footer, [role="contentinfo"]');
    await expect(footer.first()).toBeVisible();
  });

  test('navigation links work correctly', async ({page}) => {
    // Test desktop navigation (scoped to header to avoid footer duplicates)
    const headerNav = page.locator('header nav, #nav-container nav');
    const aboutLink = headerNav.locator('a[href="/about"]').first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/\/about/);
      await page.goBack();
    }

    const postsLink = headerNav.locator('a[href="/posts"]').first();
    if (await postsLink.isVisible()) {
      await postsLink.click();
      await expect(page).toHaveURL(/\/posts/);
      await page.goBack();
    }

    const snippetsLink = headerNav.locator('a[href="/snippets"]').first();
    if (await snippetsLink.isVisible()) {
      await snippetsLink.click();
      await expect(page).toHaveURL(/\/snippets/);
      await page.goBack();
    }
  });

  test('mobile menu works on small screens', async ({page}) => {
    // Set mobile viewport
    await page.setViewportSize({width: 375, height: 667});

    // Find menu button by aria-label (more specific than generic button with SVG)
    const menuButton = page.locator('button[aria-label="toggle menu button"]');
    const menuButtonCount = await menuButton.count();

    if (menuButtonCount > 0 && (await menuButton.isVisible())) {
      // Click to open menu
      await menuButton.click();

      // Wait for mobile menu to be visible
      // Mobile menu nav contains buttons (not links) - this distinguishes it from desktop nav
      const mobileNav = page.locator('header nav').filter({has: page.locator('button:has-text("Home")')});
      await expect(mobileNav).toBeVisible();

      // Check if mobile menu items are visible (mobile menu uses buttons, not links)
      const homeButton = mobileNav.locator('button:has-text("Home")');
      const aboutButton = mobileNav.locator('button:has-text("About")');
      await expect(homeButton).toBeVisible();
      await expect(aboutButton).toBeVisible();

      // Test closing menu with Escape key
      await page.keyboard.press('Escape');

      // Wait a bit for the menu to close
      await page.waitForTimeout(300);

      // Verify menu is closed (nav should be hidden)
      await expect(mobileNav).toBeHidden();
    }
  });

  test('theme changer is present', async ({page}) => {
    // Check if theme changer exists (might be in different forms)
    // Look for buttons in header that might be theme changer
    const headerButtons = page.locator('header button');
    const buttonCount = await headerButtons.count();
    expect(buttonCount).toBeGreaterThan(0);

    // Try to find theme button by aria-label or text content
    const themeButtonByAria = page.locator('button[aria-label*="theme" i], button[aria-label*="Theme" i]');
    const themeButtonByText = page.locator('header button').filter({hasText: /theme|dark|light/i});

    // At least one should exist
    const ariaCount = await themeButtonByAria.count();
    const textCount = await themeButtonByText.count();
    expect(ariaCount + textCount).toBeGreaterThan(0);
  });

  test('contact button is present and functional', async ({page}) => {
    const contactLink = page.locator('a:has-text("Contact"), button:has-text("Contact")');
    await expect(contactLink.first()).toBeVisible();

    // Click contact link if it's a link
    const contactAsLink = page.locator('a:has-text("Contact")');
    if ((await contactAsLink.count()) > 0) {
      await contactAsLink.first().click();
      await expect(page).toHaveURL(/\/contact/);
    }
  });

  test('page has proper semantic structure', async ({page}) => {
    // Check for main content area
    const main = page.locator('main');
    await expect(main).toBeVisible();

    // Check for proper heading hierarchy
    const h2Headings = page.locator('h2');
    const h2Count = await h2Headings.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('external social links open in new tab', async ({page, context}) => {
    // Scope to hero section to avoid footer duplicates
    const heroSection = page.locator('section#home');
    const githubLink = heroSection.locator('a[aria-label="go to github"]');
    const linkedinLink = heroSection.locator('a[aria-label="go to linkedin"]');

    // Check that links have target="_blank" and rel="noreferrer"
    await expect(githubLink).toHaveAttribute('target', '_blank');
    await expect(githubLink).toHaveAttribute('rel', 'noreferrer');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');
    await expect(linkedinLink).toHaveAttribute('rel', 'noreferrer');
  });

  test('projects carousel is interactive', async ({page}) => {
    const projectSection = page.locator('section#project');
    await expect(projectSection).toBeVisible();

    // Wait for swiper to be ready
    await page.waitForSelector('.swiper, .mySwiper', {state: 'visible'});

    // Check for navigation buttons (may be hidden on mobile)
    const nextButton = page.locator('.swiper-button-next');
    const prevButton = page.locator('.swiper-button-prev');

    // Navigation buttons might not be visible on mobile, so check if they exist
    const nextButtonCount = await nextButton.count();
    const prevButtonCount = await prevButton.count();

    // If navigation buttons exist, test interaction
    if (nextButtonCount > 0 && (await nextButton.first().isVisible())) {
      await nextButton.first().click();
      // Wait a bit for carousel to move
      await page.waitForTimeout(500);
    }

    // Check for pagination dots
    const pagination = page.locator('.swiper-pagination');
    if ((await pagination.count()) > 0) {
      await expect(pagination.first()).toBeVisible();
    }
  });

  test('page is responsive', async ({page}) => {
    // Test mobile viewport
    await page.setViewportSize({width: 375, height: 667});
    await expect(page.locator('section#home')).toBeVisible();

    // Test tablet viewport
    await page.setViewportSize({width: 768, height: 1024});
    await expect(page.locator('section#home')).toBeVisible();

    // Test desktop viewport
    await page.setViewportSize({width: 1920, height: 1080});
    await expect(page.locator('section#home')).toBeVisible();
  });
});
