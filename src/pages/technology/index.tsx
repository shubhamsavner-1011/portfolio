import TechnologyCard from "@/components/TechnologyCard";
import { Tech } from "@/constants/textConstents";

const Technology = () => {
  return (
    <div>
      <p className="tech">Technology</p>
      <div className="container">
        <div className="row">
            
                {Tech?.map((item)=> {
                    return(
                        <>  
                        <div className="col-md-4 col-xs-12 mt-2 mb-2" data-aos={`${item.animation}`}>               
                        <TechnologyCard icon={item.icon} technology={item.technology} subTechnology={item.subTechnology}/>
                        </div>      
                        </>
                    )
                })}
           
        </div>
      </div>
    </div>
  );
};

export default Technology;
