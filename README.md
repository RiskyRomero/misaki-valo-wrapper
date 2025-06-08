# Misaki Valo Wrapper
A strongly typed wrapper for `valorant-api.com`.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Disclaimer](#disclaimer)
- [Contact Me](#disclaimer)

## Installation
You may use npm, yarn or bun to install:

### npm
```bash
npm install misaki-valo-wrapper
```

### yarn
```bash
yarn add misaki-valo-wrapper
```

### bun
```bash
bun add misaki-valo-wrapper
```

## Usage

### Example 1: Getting Weapons

```typescript
import { getWeapons, getWeaponByUuid, type ApiResponse, type Weapon } = "misaki-valo-wrapper";

// Fetch all weapons (Defaults to English ["en-US"]) //
const weapons: ApiResponse<Weapon> = await getWeapons();
console.log(weapons);

// Fetch all weapons in Japanese locale //
// const weaponsInJapanese: ApiResponse<Weapon> = await getWeapons("ja-JP");
// console.log(weapoonsInJapanese);

// Get weapon data by UUID, example: Vandal //
const vandalResult = await getWeaponByUuid("9c82e19d-4575-0200-1a81-3eacf00cf872");
console.log(vandalResult);

// Fetch weapon data by UUID, example: Vandal (But in Japanese this time) :)
// const vandalResultInJapanese = await getWeaponByUuid("9c82e19d-4575-0200-1a81-3eacf00cf872", "ja-JP");
// console.log(vandalResultInJapanese);
```

### Example 2: Handling status codes
```typescript
import { getWeaponByUuid } = "misaki-valo-wrapper";
const phantomResult = await getWeaponByUuid("ee8e8d15-496b-07ac-e5f6-8fae5d4c7b1a"); // Type would either be ApiResponse<Weapon> or ErrorResponse
if (phantomResult.status === 200) {
  console.log(phantomResult.data); // Should output the Phantom's weapon data :) Success!!
} else if (phantomResult.status === 400) {
  console.error(phantomResult.error); // Bad request error....
} else if (phantomResult.status === 404) {
  console.error(phantomResult.error); // Unable to find the data, you probably used an invalid uuid ¯_(ツ)_/¯
}
```

## Configuration
### Default Language
By default, the language is set to "en-US". You can override this by passing the language parameter when calling the API functions. Most of the API functions have the language parameter, except for `getVersion()`.

## Contributing
You are more than welcome to contribute! When contributing, please follow the steps below:
1. Fork the repository.
3. Create a new branch for your feature, refactor or fix.
4. Make your changes, then commit with clear and concise messages (Please use [semantic commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)).
5. Push your changes to your forked repo and create a pull request.

## Testing
Tests can only be run when cloning the project repository. Use `bun test` to run tests.

## Disclaimer
This package is **NOT** associated with Valorant, Riot Games, or Valorant-API.com. This package only interacts with [valorant-api.com](valorant-api.com) to retrieve the data.

## Contact (Feel free to contact me for enquiries)
- Email: riskyromero@proton.me
- Discord: byue
- Valorant: Ryumin#ELI
( Sneaking my Valorant here in case you want to play with me, or have a spare Riot gun buddy :3 )