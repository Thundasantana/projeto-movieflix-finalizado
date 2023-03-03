import { ReactComponent as StarImage } from 'assets/images/star-image.svg';
import './styles.css';

export type Props = {
  text: string;
  name: string;
};

const ReviewListing = ({ text, name }: Props) => {
  return (
    <div className="details-container">
      <div className="details-header">
        <StarImage />
        <h1>{name}</h1>
      </div>
      <div className="details-card">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default ReviewListing;
