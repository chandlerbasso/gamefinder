DROP TABLE if EXISTS games;

CREATE TABLE games (
  main_id SERIAL unique PRIMARY KEY,
  game_id INT NOT NULL,
  description VARCHAR(144) ,
  article_link TEXT
)
