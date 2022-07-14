/* POST a new row into a table*/
INSERT INTO users( first_name, last_name, email, password )
VALUES ( 'Tre', 'Knowland', 'treknowland@gmail.com', 'megaballs' );

INSERT INTO users( first_name, last_name, email, password )
VALUES ('Smeelio', 'porshleemio', 'sleemshleem@slonky.com', 'AAAAAAAAAAAAAA'),
	   ('bartholameu', 'awesome', 'reallycool@dude.com', 'AHSDFAKJF');

INSERT INTO todos(description, status, users_id) VALUES ('YIPPEEE', 'NEVER COMPLETE', 4);


/*GET rows from a table*/
SELECT * 
FROM users; 

SELECT first_name, last_name, password
FROM users;

SELECT *
FROM users
WHERE id = 2;

/*UPDATE a row(s) in a table*/
UPDATE users 
SET first_name = 'Tree'
WHERE id = 1;

/*DELETE a row(s) in a table*/
DELETE FROM users
WHERE id = 3;