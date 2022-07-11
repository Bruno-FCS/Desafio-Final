package com.brunofernandes.apispringboot.services;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.brunofernandes.apispringboot.entities.UserResponse;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Service
public class TokenService {

	private static final long JWT_TOKEN_VALIDITY = 24 * 60 * 60 * 1000;

	@Value("${jwt.secret}")
	private String secret;

	public String generateToken(UserResponse user) {
		return Jwts.builder()
				.claim("user_id", user.getUser_id())
				.claim("user_name", user.getUser_name())
				.claim("user_email", user.getUser_email())
				.claim("user_full_name", user.getUser_full_name())
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY))
				.signWith(SignatureAlgorithm.HS256, secret)
				.compact();
	}

}
