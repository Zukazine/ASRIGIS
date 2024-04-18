// pages/[id].js or pages/[id].tsx
import { useRouter } from 'next/router';
import { geoplatform } from '../path/to/data';

const CardDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const card = geoplatform.find(card => card.id === Number(id));

  if (!card) return <div>Loading...</div>;

  const { link, image } = card;

  // Render the card details
  return (
    <div>
      <h1>Card Details</h1>
      <img src={image} alt="Card Image" />
      <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
    </div>
  );
};

export default CardDetailPage;
