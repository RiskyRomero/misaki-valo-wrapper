export interface Agent {
  uuid: string;
  displayName: string;
  description: string;
  developerName: string;
  releaseDate: Date;
  characterTags: string[];
  displayIcon: string;
  displayIconSmall: string;
  bustPortrait: string;
  fullPortrait: string;
  fullPortraitV2: string;
  killfeedPortrait: string;
  background: string;
  backgroundGradientColors: string[];
  assetPath: string;
  isFullPortraitRightFacing: boolean;
  isPlayableCharacter: boolean;
  isAvailableForTest: boolean;
  isBaseContent: boolean;
  role: {
    uuid: string;
    displayName: string;
    description: string;
    displayIcon: string;
    assetPath: string;
  };
  recruitmentData: {
    counterId: string;
    milestoneId: string;
    milestoneThreshold: number;
    useLevelVpCostOverride: boolean;
    startDate: Date;
    endDate: Date;
  };
  abilities: Ability[],
  voiceLine: {
    minDuration: number;
    maxDuration: number;
    mediaList: Media[];
  }
}

export interface Media {
  id: number;
  wwise: string;
  wave: string;
}

export interface Ability {
  slot: string;
  displayName: string;
  description: string;
  displayIcon: string;
}

export interface Buddy {
  uuid: string;
  displayName: string;
  isHiddenIfNotOwned: boolean;
  themeUuid: string;
  displayIcon: string;
  assetPath: string;
  levels: BuddyLevel[];
}

export interface BuddyLevel {
  uuid: string;
  charmLevel: number;
  hideIfNotOwned: boolean;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}

export interface Bundle {
  uuid: string;
  displayName: string;
  displayNameSubText: string;
  description: string;
  extraDescription: string;
  promoDescription: string;
  useAdditionalContext: boolean;
  displayIcon: string;
  displayIcon2: string;
  logoIcon: string;
  verticalPromoImage: string;
  assetPath: string;
}

export interface Ceremony {
  uuid: string;
  displayName: string;
  assetPath: string;
}

export interface CompetitiveTier {
  uuid: string;
  assetObjectName: string;
  tiers: Tier[];
  assetPath: string;
}

export interface Tier {
  tier: number;
  tierName: string;
  division: string;
  divisionName: string;
  color: string;
  backgroundColor: string;
  smallIcon: string;
  largeIcon: string;
  rankTriangleDownIcon: string;
  rankTriangleUpIcon: string;
}

export interface ContentTier {
  uuid: string;
  displayName: string;
  devName: string;
  rank: number;
  juiceValue: number;
  juiceCost: number;
  highlightColor: string;
  displayIcon: string;
  assetPath: string;
}

export interface Contract {
  uuid: string;
  displayName: string;
  shipIt: boolean;
  useLevelVPCostOverride: boolean;
  levelVPCostOverride: number;
  freeRewardScheduleUuid: string;
  content: {
    relationType: string;
    relationUuid: string;
    chapters: {
      isEpilogue: boolean;
      levels: {
        reward: {
          type: string;
          uuid: string;
          amount: number;
          isHighlighted: boolean
        };
        xp: number;
        vpCost: number;
        isPurchasableWithVP: boolean;
        doughCost: number;
        isPurchasableWithDough: boolean;
      }[];
      freeRewards: {
        type: string;
        uuid: string;
        amount: number;
        isHighlighted: boolean;
      }[];
    }[];
    premiumRewardScheduleUuid: string;
    premiumVPCost: number;
  };
  assetPath: string;
}

export interface Currency {
  uuid: string;
  displayName: string;
  displayNameSingular: string;
  displayIcon: string;
  largeIcon: string;
  rewardPreviewIcon: string;
  assetPath: string;
}

export interface Event {
  uuid: string;
  displayName: string;
  shortDisplayName: string;
  startTime: Date;
  endTime: Date;
  assetPath: string;
}

export interface Flex {
  uuid: string;
  displayName: string;
  displayNameAllCaps: string;
  displayIcon: string;
  assetPath: string;
}

export interface Gamemode {
  uuid: string;
  displayName: string;
  description: string;
  duration: string;
  economyType: string;
  allowsMatchTimeouts: boolean;
  isTeamVoiceAllowed: boolean;
  isMinimapHidden: boolean;
  orbCount: number;
  roundsPerHalf: number;
  teamRoles: string[];
  gameFeaturesOverrides: {
    featureName: string;
    state: boolean;
  }[];
  gameRuleBoolOverrides: {
    ruleName: string;
    state: boolean;
  }[];
  displayIcon: string;
  listViewIconTall: string;
  assetPath: string;
}

export interface GamemodeEquippable {
  uuid: string;
  displayName: string;
  category: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
}

export interface Gear {
  uuid: string;
  displayName: string;
  description: string;
  descriptions: string[];
  details: {
    name: string;
    value: string;
  }[];
  displayIcon: string;
  assetPath: string;
  shopData: ShopData;
}

export interface ShopData {
  cost: number;
  category: string;
  shopOrderPriority: number;
  categoryText: string;
  gridPosition: {
    row: number;
    column: number;
  };
  canBeTrashed: boolean;
  image: string;
  newImage2: string;
  assetPath: string;
}

export interface LevelBorder {
  uuid: string;
  displayName: string;
  startingLevel: number;
  levelNumberAppearance: string;
  smallPlayerCardAppearance: string;
  assetPath: string;
}

export interface Map {
  uuid: string;
  displayName: string;
  narrativeDescription: string;
  tacticalDescription: string;
  coordinates: string;
  displayIcon: string;
  listViewIcon: string;
  listViewIconTall: string;
  splash: string;
  stylizedBackgroundImage: string;
  premierBackgroundImage: string;
  assetPath: string;
  mapUrl: string;
  xMultiplier: number;
  yMultiplier: number;
  xScalarToAdd: number;
  yScalarToAdd: number;
  callouts: Callout[];
}

export interface Callout {
  regionName: string;
  superRegionName: string;
  location: {
    x: number;
    y: number;
  }
}

export interface PlayerCard {
  uuid: string;
  displayName: string;
  isHiddenIfNotOwned: boolean;
  themeUuid: string;
  displayIcon: string;
  smallArt: string;
  wideArt: string;
  largeArt: string;
  assetPath: string;
}

export interface PlayerTitle {
  uuid: string;
  displayName: string;
  titleText: string;
  isHiddenIfNotOwned: boolean;
  assetPath: string;
}

export interface Season {
  uuid: string;
  displayName: string;
  title: string;
  type: string;
  startTime: Date;
  endTime: Date;
  parentUuid: string;
  assetPath: string;
}

export interface CompetitiveSeason {
  uuid: string;
  startTime: Date;
  endTime: Date;
  seasonUuid: string;
  competitiveTiersUuid: string;
  borders: {
    uuid: string;
    level: number;
    winsRequired: number;
    displayIcon: string;
    smallIcon: string;
    assetPath: string;
  }[];
  assetPath: string;
}

export interface Spray {
  uuid: string;
  displayName: string;
  category: string;
  themeUuid: string;
  isNullSpray: string;
  hideIfNotOwned: boolean;
  displayIcon: string;
  fullIcon: string;
  fullTransparentIcon: string;
  animationPng: string;
  animationGif: string;
  assetPath: string;
  levels: SprayLevel[];
}

export interface SprayLevel {
  uuid: string;
  sprayLevel: number;
  displayName: string;
  displayIcon: string;
  assetPath: string;
}

export interface Theme {
  uuid: string;
  displayName: string;
  displayIcon: string;
  storeFeaturedImage: string;
  assetPath: string;
}

export interface Weapon {
  uuid: string;
  displayName: string;
  category: string;
  defaultSkinUuid: string;
  displayIcon: string;
  killStreamIcon: string;
  assetPath: string;
  weaponStats: {
    fireRate: number;
    magazineSize: number;
    runSpeedMultiplier: number;
    equipTimeSeconds: number;
    reloadTimeSeconds: number;
    firstBulletAccuracy: number;
    shotgunPelletCount: number;
    wallPenetration: string;
    feature: string;
    fireMode: string;
    altFireType: string;
    adsStats: {
      zoomMultiplier: number;
      fireRate: number;
      runSpeedMultiplier: number;
      burstCount: number;
      firstBulletAccuracy: number;
    };
    altShotgunStats: {
      shotgunPelletCount: number;
      burstRate: number;
    };
    airBurstStats: {
      shotgunPelletCount: number;
      burstDistance: number;
    };
    damageRanges: {
      rangeStartMeters: number;
      rangeEndMeters: number;
      headDamage: number;
      bodyDamage: number;
      legDamage: number;
    }[];
  };
  shopData: ShopData;
  skins: WeaponSkin[];
}

export interface WeaponSkin {
  uuid: string;
  displayName: string;
  themeUuid: string;
  contentTierUuid: string;
  displayIcon: string;
  wallpaper: string;
  assetPath: string;
  chromas: WeaponSkinChroma[];
  levels: WeaponSkinLevel[];
}

export interface WeaponSkinChroma {
  uuid: string;
  displayName: string;
  displayIcon: string;
  fullRender: string;
  swatch: string;
  streamedVideo: string;
  assetPath: string;
}

export interface WeaponSkinLevel {
  uuid: string;
  displayName: string;
  levelItem: string;
  displayIcon: string;
  streamedVideo: string;
  assetPath: string;
}

export interface Version {
  manifestId: string;
  branch: string;
  version: string;
  buildVersion: string;
  engineVersion: string;
  riotClientVersion: string;
  riotClientBuild: string;
  buildDate: Date;
}