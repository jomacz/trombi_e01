

- PROMO (id, name, github_organization)
  
    PK SERIAL(auto incrémenté) UNIQUE NOT NULL, TEXT UNIQUE, TEXT
  
- STUDENT (id, github_username, first_name, last_name, profile_picture_url, #PROMO(id))
  
    PK SERIAL UNIQUE NOT NULL, TEXT, TEXT, TEXT, TEXT NOT NULL DEFAULT 'https://picsum.photos/200', FK NOT NULL