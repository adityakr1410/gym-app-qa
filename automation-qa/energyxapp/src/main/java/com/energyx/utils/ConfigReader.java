package com.energyx.utils;

import com.energyx.constants.ConstantProvider;

import java.io.FileInputStream;
import java.io.InputStream;
import java.util.Properties;

public class ConfigReader {
    private static final String configPath = ConstantProvider.configPath;

    private static final ThreadLocal<Properties> threadLocalProperties = ThreadLocal.withInitial(() -> {
        Properties properties = new Properties();
        try (InputStream input = new FileInputStream(configPath)) {
            properties.load(input);
        } catch (Exception exception) {
            exception.printStackTrace();
            throw new RuntimeException("Failed to load configuration file: " + configPath, exception);
        }
        return properties;
    });

    private static String getProperty(String key) {
        return threadLocalProperties.get().getProperty(key);
    }

    public static String getFrontendURI() {
        return getProperty("app.frontend.uri");
    }

    public static String getBackendURI() {
        return getProperty("app.backend.uri");
    }
}