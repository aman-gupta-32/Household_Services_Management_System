package com.app.securityconfig;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.entities.UserEntity;

@Configuration
@EnableWebSecurity
public class SecConfig {

	 @Autowired
	    private UserDetailsService userDetailsService;
	 @Autowired
	  private JwtFilter jwtfilter;
	
	
	@Bean
	public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
		System.out.println("in filter chain");
		return http.csrf(Customizer->Customizer.disable())
			.authorizeHttpRequests(request -> request
					 .requestMatchers("/login","/register").permitAll()
					.requestMatchers("/booking","/addtocart")
					.hasRole("CUSTOMER")
					.requestMatchers("/totalamount/{id}","/orders/{id}")
					.hasRole("SERVICEPROVIDER")
					.anyRequest().authenticated())
			//.formLogin(Customizer.withDefaults())
			//.httpBasic(Customizer.withDefaults())
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))	
			 .addFilterBefore(jwtfilter, UsernamePasswordAuthenticationFilter.class)
			.build();
	}
	
	
	@Bean
	public AuthenticationProvider authenticationProvider() {
		
		System.out.println("in auth provider");
		DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
		provider.setPasswordEncoder(NoOpPasswordEncoder.getInstance());
		provider.setUserDetailsService(userDetailsService);
		return provider;
	}


	    @Bean
	    public UserEntity userEntity() {
	        return new UserEntity();
	    }
	
	   
	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	       
	    	System.out.println("in auth manager");
	    	return config.getAuthenticationManager();

	    }
}
