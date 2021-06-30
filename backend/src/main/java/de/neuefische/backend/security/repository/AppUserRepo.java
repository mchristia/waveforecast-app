package de.neuefische.backend.security.repository;

import de.neuefische.backend.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppUserRepo extends PagingAndSortingRepository<AppUser, String> {

}
