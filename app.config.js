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
                projectId: "c09b4f11-b027-4b21-b242-a48353db4974",
            },
        },
        owner: "mike123456",
    },
}
