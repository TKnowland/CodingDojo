
INSERT INTO dojos (name) VALUES ('dojo 1'), ('dojo2'), ('dojo3');

DELETE FROM dojos;

SELECT *
FROM dojos;

INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES ('ninja', '1', 137, 4), ('ninja', '2', 13, 4), ('ninja', '3', 1, 4);
INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES ('ninja', '4', 137, 5), ('ninja', '5', 13, 5), ('ninja', '6', 1, 5);
INSERT INTO ninjas(first_name, last_name, age, dojo_id) VALUES ('ninja', '7', 137, 6), ('ninja', '8', 13, 6), ('ninja', '9', 1, 6);

SELECT * FROM dojos JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = 4;
SELECT * FROM dojos JOIN ninjas ON ninjas.dojo_id = dojos.id WHERE dojos.id = 6;
SELECT ninjas.dojo_id FROM ninjas WHERE ninjas.id = 9;

