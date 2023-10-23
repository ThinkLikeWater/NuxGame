
# A
###  Test case: Change the language in Wikipedia account
#### Test description: Successful switching of the interface language of the "Wikipedia" web application by an authorized user.

#### Steps:

- 1. Login Wikipedia with your credentials.
- 2. Click on "Personal tools".
- 3. Go to "Preferences".
- 4. Find option "Internationalisation", and then select different languagle.
- 5. Click the "Save" button.

#### Expected result: The interface language has changed.


#### Preconditions: The user is registered in the system.

#### Postconditions: The user is on the main page after logging in.

---

# B

Docker setup (You need to stay in the root of the project)

1. Building docker image.
```
docker build -t playwright-test .
```
2. Running container.
```
docker-compose up -d
```
You can get your test report using (you also can find report on yor local machine here playwright-report/index.html )

```
npx playwright show-report
```
Location of test - NuxGame/tests/wiki-test.spec.ts

# Do not forget to provide your credentials into .env (location of file is root) file like this
```
USERNAME=your_username
PASSWORD=your_password
```
