package de.neuefische.backend.repository;

import de.neuefische.backend.model.AppUser;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRepo {
    List<AppUser> userList;
}
