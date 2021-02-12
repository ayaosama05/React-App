import ImagePool from './ImagePool';
import ImageVote from './ImageVote';
import TextPool from './TextPool';

const Organism = () => {
    return ( 
        <div className="">
            <div className="max-w-screen-sm	mx-auto w-full">
                <ImagePool />
            </div>
            <div className="max-w-screen-sm	mx-auto w-full">
                <ImageVote />
            </div>
            <div className="max-w-screen-sm	mx-auto w-full">
            <TextPool />
            </div>
        </div>
     );
}
 
export default Organism;
