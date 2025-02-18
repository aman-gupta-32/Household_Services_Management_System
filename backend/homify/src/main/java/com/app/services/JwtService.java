package com.app.services;

import java.util.HashMap;
import java.util.function.Function;

import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;

import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.app.dao.UserDao;
import com.app.dto.ApiResponse;
import com.app.entities.UserEntity;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class JwtService {

	@Autowired
	UserDao ud;
	
	  private String secretkey = " ";

	    public JwtService() {

	        try {
	            KeyGenerator keyGen = KeyGenerator.getInstance("HmacSHA256");
	            SecretKey sk = keyGen.generateKey();
	            secretkey = Base64.getEncoder().encodeToString(sk.getEncoded());
	        } catch (NoSuchAlgorithmException e) {
	            throw new RuntimeException(e);
	        }
	    }

	    public String generateToken(String email) {
	        Map<String, Object> claims = new HashMap<>();
	        UserEntity userPrincipal = ud.findByEmail(email);
	        return Jwts.builder()
	        		 .setSubject((userPrincipal.getEmail()))
	        		 .setIssuedAt(new Date())
	        		 .setExpiration(new Date((new Date()).getTime() + 60*60*60))
	        		 .claim("authorities",userPrincipal.getRole())
	        		 .claim("user_id",userPrincipal.getId())
	        		 .claim("name", userPrincipal.getName())
	        		  .signWith(getKey())
		              .compact();      

	    }

	    private Key getKey() {
	        byte[] keyBytes = Decoders.BASE64.decode(secretkey);
	        return Keys.hmacShaKeyFor(keyBytes);
	    }

	    public String extractUserName(String token) {
	        // extract the username from jwt token
	    	System.out.println(extractClaim(token, Claims::getSubject));
	        return extractClaim(token, Claims::getSubject);
	    }

		    private <T> T extractClaim(String token, Function<Claims, T> claimResolver) {
		        final Claims claims = extractAllClaims(token);
		        System.out.println(claims);
		        return claimResolver.apply(claims);
		    }
		
		    
		    private Claims extractAllClaims(String token) {
		    	System.out.println(token);
		        return Jwts.parserBuilder() // Use parserBuilder() instead of parser()
		                .setSigningKey(getKey()) // Make sure getKey() returns the correct secret/public key
		                .build() // Build the parser
		                .parseClaimsJws(token) // Parse the token and validate signature
		                .getBody(); // Extract claims from payload
		    }

		
		    public boolean validateToken(String token, UserDetails userDetails) {
		        final String userName = extractUserName(token);
		        return (userName.equals(userDetails.getUsername()) && !isTokenExpired(token));
		    }
		
		    private boolean isTokenExpired(String token) {
		        return extractExpiration(token).before(new Date());
		    }
		
		    private Date extractExpiration(String token) {
		        return extractClaim(token, Claims::getExpiration);
		    }

		
	
	
}
