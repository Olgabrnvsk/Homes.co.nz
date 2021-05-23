# Technical test for homes.co.nz

## Requirements

You must write tests for both our staging (ketu.homes-test.com)and production URL’s (homes.co.nz).

You can either share the results using Github or a by emailing us a script file.

--------

### Tasks:

1) Write a test that opens the home page, searches for Auckland, selects Auckland from the result lists and checks that it goes to the correct page (https://homes.co.nz/map/auckland/auckland?searchLoc=pdb%60Fafui%60@).

2) Write a test that opens the home page, searches for Petone, selects Petone from the result lists and checks that it goes to the correct page with the correct results (https://homes.co.nz/map/lower-hutt/petone?searchLoc=nvrzFsclj%60@).

3) Write a test that opens the home page, searches for 45 Puru Crescent, selects the address from the result lists, checks that it goes to the correct page (https://homes.co.nz/map/wellington/lyall-bay/puru-crescent/45?searchLoc=rhf%7BFyb%7Bi%60@) and that 45 Puru Cres is on top of the list.

---------------

## How to execute this submission

I have implemented the above-mentioned requirements using Cypress. 
Test can be executed against staging and production environment using the following command: 

```bash

npm run cy:stage

```

or

```bash

npm run cy:production

```

## Notes

- While implementing these tests I've noticed that expected urls are different per environment(stage, production). 
Therefore I've created a configurable expected urls mapping in each respectful config file. 

```json
   "expectedRelativeUrlMap": {
			"Auckland": "/map/auckland/auckland?searchLoc=pdb%60Fafui%60@",
			"Petone": "/map/lower-hutt/petone?searchLoc=nvrzFsclj%60@",
			"PuruCresent45": "/map/wellington/lyall-bay/puru-crescent/45?searchLoc=rhf%7BFyb%7Bi%60@"
		}
```

- Search for Auckland test in staging can be flaky due to inconsistent url that search page is getting redirected to. For example:

`https://ketu.homes-test.com/map/auckland/auckland?searchLoc=ndb%60Fsfui%60@` and

`https://ketu.homes-test.com/map/auckland/auckland?searchLoc=ldb%60Fqfui%60@`
