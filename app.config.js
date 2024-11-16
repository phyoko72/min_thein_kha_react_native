const IS_DEV = process.env.APP_VARIANT === "development"

export default {
    expo: {
        name: IS_DEV ? "Lat Htauk Bay Din(Dev)" : "Lat Htauk Bay Din",
        slug: "lat-htauk-bay-din",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "lat-htauk-bay-din",
        userInterfaceStyle: "automatic",
        splash: {
            image: "./assets/images/splash.png",
            resizeMode: "contain",
            backgroundColor: "#5c281d",
        },
        ios: {
            supportsTablet: true,
            bundleIdentifier: IS_DEV
                ? "com.mike123456.mintheinkha.dev"
                : "com.mike123456.mintheinkha",
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#5c281d",
            },
            package: IS_DEV
                ? "com.mike123456.mintheinkha.dev"
                : "com.mike123456.mintheinkha",
            softwareKeyboardLayoutMode: "pan",
        },
        plugins: ["expo-router", "expo-font"],
        experiments: {
            typedRoutes: true,
        },
        extra: {
            eas: {
                projectId: "aa1e4be8-aa6f-4ada-a0d0-c49ec4b3ea1b",
            },
        },
        owner: "mike123456",
    },
}
