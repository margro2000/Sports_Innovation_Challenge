package com.config.resources;

import com.codahale.metrics.annotation.Timed;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

@Path("/test_json")
@Produces(MediaType.APPLICATION_JSON)
public class ServerResource {

    public ServerResource() {
    }

    @GET
    @Timed
    public Response getTestJson() {
        StringBuffer output = new StringBuffer();
        try {
            String resourcePath = "/resources/test_data.json";
            InputStream in = getClass().getResourceAsStream(resourcePath);
            if (in != null) {
                BufferedReader inr = new BufferedReader(new InputStreamReader(in));
                String line;
                while ((line = inr.readLine()) != null) {
                    output.append(line).append("\n");
                }
                inr.close();
                in.close();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        Response response = Response.ok(output.toString()).build();
        response.getHeaders().add("Access-Control-Allow-Origin", "*");
        response.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        return response;
    }
}
