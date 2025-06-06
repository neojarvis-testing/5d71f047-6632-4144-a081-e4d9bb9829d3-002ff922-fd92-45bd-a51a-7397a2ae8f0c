package com.examly.springappuser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = "com.examly.springappuser.client")
public class SpringappuserApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringappuserApplication.class, args);
	}
}
