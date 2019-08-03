import React from 'react';
import styled from 'styled-components';
import { Card, Media } from 'react-bootstrap';
import CustomBadge from './CustomBadge';

const SocialCard = styled(Card)`
  color: var(--bert-black);
  border: none;
  border-radius: 0;
  font-size: 0.9rem;
  overflow: hidden;
  margin: 1rem;

  img {
    border-radius: 50%;
  }
`;

export default function UserReview() {
  return (
    <SocialCard>
      <Card.Body>
        <Media>
          <img
            width={64}
            height={64}
            className='mr-3'
            src='https://via.placeholder.com/64'
            alt='Generic placeholder'
          />
          <Media.Body>
            <h5>
              A review by Per Gunnar Jonsson <CustomBadge text='9.0' />
            </h5>
            <p>Written by Per Gunnar Jonsson on May 12, 2019</p>
            <p>
              I just came home with the kids from the cinema where we had
              watched Spider-Man: Far From Home so I thought I would write a few
              lines while it was still fresh in my mind. I have to say that it
              was a decent enough movie. I didn’t exactly regret having forked
              out the money to watch it in the cinema but that’s about it. It’s
              far from a great movie and the end scene…well it’s a typical
              really crappy Hollywood ending where the writer cannot be bothered
              to spend time creating something intelligent so he just goes for
              the usual sensationalist cliffhanger bullshit. As with the
              previous movie, Spider-Man: Homecoming, this is a Spider-Man for
              kids, or at least younger people, movie which perhaps is part of
              why I am somewhat lukewarm towards it. This one did not feel as
              childish as the previous one but there is still a lot of teenage
              angst and rubbish in it. The plot is of course highly predictable
              as well. The special effects on the other hand are quite good and
              essentially what makes the movie worth watching. At least to me.
              The end fight with hundreds of those drones flying around
              intermixed with Mysterio’s illusions where quite cool. A bit over
              the top perhaps but cool nonetheless.
            </p>
          </Media.Body>
        </Media>
      </Card.Body>
    </SocialCard>
  );
}
