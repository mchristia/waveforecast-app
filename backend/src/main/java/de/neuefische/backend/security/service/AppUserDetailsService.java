package de.neuefische.backend.security.service;

import de.neuefische.backend.security.repository.AppUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AppUserDetailsService implements UserDetailsService {
    private final AppUserRepo repo;

    @Autowired
    public AppUserDetailsService(AppUserRepo appUserRepo){
        this.repo = appUserRepo;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return repo.findById(username)
                .map(appUser -> User
                        .withUsername(username)
                        .password(appUser.getPassword())
                        .authorities("User")
                        .build())
                .orElseThrow(()-> new UsernameNotFoundException("Username does not exist: " +username));

    }
}
