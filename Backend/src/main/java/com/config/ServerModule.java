package com.config;

import com.google.inject.AbstractModule;
import com.google.inject.Provides;
import io.dropwizard.setup.Environment;

public class ServerModule extends AbstractModule {

    @Override
    protected void configure() {
        // anything you'd like to configure
    }

    /*@Provides
    public String providesSomethingThatNeedsConfiguration(ServerConfiguration configuration) {
        return new String(configuration.getTemplate());
    }

    @Provides
    public String providesSomenthingThatNeedsEnvironment(Environment env) {
        return new String(env.getName());
    }*/
}