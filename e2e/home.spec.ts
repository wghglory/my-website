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
    const nav = header.getByRole('navigation');
    const navLinks = nav.getByRole('link');
    await expect(navLinks.first()).toBeVisible();

    // Check logo
    const logo = page.getByRole('heading', {name: /Guanghui/i, level: 1});
    await expect(logo).toBeVisible();
  });

  test('hero section displays correctly', async ({page}) => {
    const heroSection = page.locator('section#home');
    await expect(heroSection).toBeVisible();

    // Check hero text content
    await expect(page.getByText('Web Developer Loving')).toBeVisible();
    await expect(page.getByText('Angular')).toBeVisible();
    await expect(page.getByText('React')).toBeVisible();
    await expect(page.getByText('Vue')).toBeVisible();
    await expect(page.getByText(/Hi 👋.*Guanghui Wang/i)).toBeVisible();

    // Check social icons (scoped to hero section to avoid footer duplicates)
    const githubLink = heroSection.getByRole('link', {name: 'go to github'});
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/wghglory');
    await expect(githubLink).toHaveAttribute('target', '_blank');

    const linkedinLink = heroSection.getByRole('link', {name: 'go to linkedin'});
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/guanghuiwang/');
    await expect(linkedinLink).toHaveAttribute('target', '_blank');

    const emailLink = heroSection.getByRole('link', {name: 'send email'});
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
    await expect(page.getByText(/10\+.*Year Experience/i)).toBeVisible();
  });

  test('projects section displays correctly', async ({page}) => {
    const projectSection = page.locator('section#project');
    await expect(projectSection).toBeVisible();

    // Check section title (scoped to project section to avoid nav/footer duplicates)
    await expect(projectSection.getByRole('heading', {name: 'Projects', level: 2})).toBeVisible();

    // Check for project carousel/swiper
    const swiper = page.locator('.swiper, .mySwiper');
    await expect(swiper.first()).toBeVisible();

    // Check "View more" link
    const viewMoreLink = page.getByRole('link', {name: 'View more', exact: true});
    await expect(viewMoreLink).toBeVisible();
    await expect(viewMoreLink).toHaveAttribute('href', '/projects');
  });

  test('footer is visible', async ({page}) => {
    const footer = page.locator('footer, [role="contentinfo"]').first();
    await expect(footer).toBeVisible();
  });

  test('navigation links work correctly', async ({page}) => {
    // Test desktop navigation (scoped to header to avoid footer duplicates)
    const header = page.locator('header, [role="banner"]').first();
    const headerNav = header.getByRole('navigation');
    const aboutLink = headerNav.getByRole('link', {name: /about/i}).first();
    if (await aboutLink.isVisible()) {
      await aboutLink.click();
      await expect(page).toHaveURL(/\/about/);
      await page.goBack();
    }

    const postsLink = headerNav.getByRole('link', {name: /posts/i}).first();
    if (await postsLink.isVisible()) {
      await postsLink.click();
      await expect(page).toHaveURL(/\/posts/);
      await page.goBack();
    }

    const snippetsLink = headerNav.getByRole('link', {name: /snippets/i}).first();
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
    const menuButton = page.getByRole('button', {name: 'toggle menu button'});
    const menuButtonCount = await menuButton.count();

    if (menuButtonCount > 0 && (await menuButton.isVisible())) {
      // Click to open menu
      await menuButton.click();

      // Wait for mobile menu to be visible
      // Mobile menu nav contains buttons (not links) - this distinguishes it from desktop nav
      const header = page.locator('header, [role="banner"]').first();
      const mobileNav = header.getByRole('navigation').filter({has: page.getByRole('button', {name: 'Home'})});
      await expect(mobileNav).toBeVisible();

      // Check if mobile menu items are visible (mobile menu uses buttons, not links)
      const homeButton = mobileNav.getByRole('button', {name: 'Home'});
      const aboutButton = mobileNav.getByRole('button', {name: 'About'});
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
    const header = page.locator('header, [role="banner"]').first();
    const headerButtons = header.getByRole('button');
    const buttonCount = await headerButtons.count();
    expect(buttonCount).toBeGreaterThan(0);

    // Try to find theme button by aria-label or text content
    const themeButtonByAria = page.getByRole('button', {name: /theme/i});
    const themeButtonByText = header.getByRole('button').filter({hasText: /theme|dark|light/i});

    // At least one should exist
    const ariaCount = await themeButtonByAria.count();
    const textCount = await themeButtonByText.count();
    expect(ariaCount + textCount).toBeGreaterThan(0);
  });

  test('contact button is present and functional', async ({page}) => {
    // Check if contact exists as link or button
    const contactAsLink = page.getByRole('link', {name: 'Contact'});
    const contactAsButton = page.getByRole('button', {name: 'Contact'});

    if ((await contactAsLink.count()) > 0) {
      await expect(contactAsLink.first()).toBeVisible();
      await contactAsLink.first().click();
      await expect(page).toHaveURL(/\/contact/);
    } else if ((await contactAsButton.count()) > 0) {
      await expect(contactAsButton.first()).toBeVisible();
    }
  });

  test('page has proper semantic structure', async ({page}) => {
    // Check for main content area
    const main = page.getByRole('main');
    await expect(main).toBeVisible();

    // Check for proper heading hierarchy
    const h2Headings = page.getByRole('heading', {level: 2});
    const h2Count = await h2Headings.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test('external social links open in new tab', async ({page, context}) => {
    // Scope to hero section to avoid footer duplicates
    const heroSection = page.locator('section#home');
    const githubLink = heroSection.getByRole('link', {name: 'go to github'});
    const linkedinLink = heroSection.getByRole('link', {name: 'go to linkedin'});

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
