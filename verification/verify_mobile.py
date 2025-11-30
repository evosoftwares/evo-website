from playwright.sync_api import sync_playwright

def verify_mobile_responsive():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Use a mobile viewport
        page = browser.new_page(viewport={"width": 375, "height": 812})

        page.goto("http://localhost:8000/index.html")

        # Screenshot Hero Section
        page.screenshot(path="verification/mobile_hero.png", full_page=False)

        # Scroll to Services and screenshot
        services_section = page.locator(".services")
        services_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000) # Wait for potential animations
        services_section.screenshot(path="verification/mobile_services.png")

        # Scroll to Possibilities and screenshot
        possibilities_section = page.locator(".possibilities")
        possibilities_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        possibilities_section.screenshot(path="verification/mobile_possibilities.png")

        # Scroll to Partners and screenshot
        partners_section = page.locator(".partners-section")
        partners_section.scroll_into_view_if_needed()
        page.wait_for_timeout(1000)
        partners_section.screenshot(path="verification/mobile_partners.png")

        browser.close()

if __name__ == "__main__":
    verify_mobile_responsive()
