package com.service360.group50.validator;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidatotor implements Predicate<String> {
    @Override
    public boolean test ( String s ) {
        // TODO: Regex to validate email
        return true;
    }
}
