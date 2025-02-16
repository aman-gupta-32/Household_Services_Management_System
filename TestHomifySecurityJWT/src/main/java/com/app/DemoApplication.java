package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;


@SpringBootApplication
@ComponentScan(basePackages = "com.app")
public class DemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
	
	@Bean
	public ModelMapper modelMapper() {
		ModelMapper mapper=new ModelMapper();
		mapper.getConfiguration()
		//data xfer from src props -> dest props iff 
		//->1.  names n data types match
		.setMatchingStrategy(MatchingStrategies.STRICT)
		// && 2, src property is not null 
		.setPropertyCondition(Conditions.isNotNull());
		return mapper;
	}


}
