package de.neuefische.backend.security.repository;

import de.neuefische.backend.model.SurfSpot;
import de.neuefische.backend.security.model.AppUser;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppUserRepo extends PagingAndSortingRepository<AppUser, String> {

    AppUser getAppUserBy(String id);
    AppUser findAppUserBy(String id);

}
