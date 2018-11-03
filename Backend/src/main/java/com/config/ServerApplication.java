package com.config;

import io.dropwizard.Application;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import com.config.resources.ServerResource;
import com.config.health.TemplateHealthCheck;
import com.hubspot.dropwizard.guice.GuiceBundle;

public class ServerApplication extends Application<ServerConfiguration> {
    private GuiceBundle<ServerConfiguration> guiceBundle;

    public static void main(String[] args) throws Exception {
        new ServerApplication().run(args);
    }

    @Override
    public String getName() {
        return "Flagger Server";
    }

    @Override
    public void initialize(Bootstrap<ServerConfiguration> bootstrap) {
        GuiceBundle<ServerConfiguration> guiceBundle = GuiceBundle.<ServerConfiguration>newBuilder()
                .addModule(new ServerModule())
                .enableAutoConfig(getClass().getPackage().getName())
                .setConfigClass(ServerConfiguration.class)
                .build();

        bootstrap.addBundle(guiceBundle);
    }

    @Override
    public void run(ServerConfiguration configuration, Environment environment) {
        final ServerResource resource = new ServerResource();
        final ServerResource resource2 = new ServerResource();
        final TemplateHealthCheck healthCheck = new TemplateHealthCheck(configuration.getTemplate());
        environment.healthChecks().register("template", healthCheck);

        environment.jersey().register(resource);
        environment.jersey().register(resource2);
    }
}