import { test, expect, Page } from '@playwright/test';

test('Welcome to the world of branches', async ({ page}) => {
 console.log("this is from world of branches")
});

test('Welcome to the world of branches', async ({ page }: { page: Page }) => {
 console.log("updated on 2909 from another branch")
});