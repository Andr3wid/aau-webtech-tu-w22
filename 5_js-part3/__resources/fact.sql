BEGIN;

CREATE TABLE fact (id BIGSERIAL PRIMARY KEY, catfact TEXT);

INSERT INTO
    fact (catfact)
VALUES
    (
        'The cat has 500 skeletal muscles (humans have 650).'
    ),
    (
        'Unlike humans, cats are usually lefties. Studies indicate that their left paw is typically their dominant paw.'
    ),
    (
        'Siamese kittens are born white because of the heat inside the mother`s uterus before birth. This heat keeps the kittens hair from darkening on the points.'
    );

END;