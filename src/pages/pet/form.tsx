import DropDown from '../../components/Dropdown';
import { GetStaticProps } from 'next';
import { getBaseInfosService } from './../../api/services/formService';

type Content = {
  text: string;
  value: string;
};
type Props = {
  breeds: Content[];
  colors: Content[];
  furs: Content[];
  sizes: Content[];
  tempers: Content[];
  species: Content[];
};
const PetForm = ({ breeds, colors, furs, sizes, tempers, species }: Props) => {
  return (
    <>
      <h1>Pet Form</h1>
      <div>
        <DropDown data={breeds} type="breed" />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await getBaseInfosService();

  const info = JSON.parse(result.data);
  const { breeds, colors, furs, sizes, tempers, species } = info;

  return {
    props: { breeds, colors, furs, sizes, tempers, species }
  };
};
export default PetForm;
