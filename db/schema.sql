DROP TABLE if EXISTS games;

CREATE TABLE games (
  main_id SERIAL unique PRIMARY KEY,
  game_id TEXT NOT NULL UNIQUE,
  game_name VARCHAR(144),
  game_desc TEXT,
  game_image TEXT
)
