import React from 'react' ;

const Text = ({showText}) => {
    return(
        <div style = {{display: showText ? 'block' : 'none' }}>

            <p> The moose (or elk), Alces alces, is an iconic animal for Sweden – a symbol of the wild,a symbol of the majesty and dignity of Sweden’s natural areas. The moose holds a particular fascination for overseas visitors, though in Sweden it is in fact one of the country’s most common wild animals.</p>                      
            <p> The moose is the tallest, and the second-largest, land animal in North America, only falling short of the American bison, in terms of mass. It is the world's tallest, largest and heaviest extant species of deer. Most adult male moose have distinctively broad, palmate ("open-hand shaped") antlers; other members of the deer family have antlers with a dendritic ("twig-like"),pointed configuration. Moose are winter specialists, and typically inhabit the circumpolar boreal forests or temperate broadleaf and mixed forests of the Northern Hemisphere,thriving in cooler, temperate areas as well as subarctic climates.</p> 
           
            <h2> Range</h2>
            <p>Moose live in North America and also range from northern Europe to Siberia. In Europe they live in Finland, Sweden, Norway, Poland and the Baltic countries(Estonia, Latvia and Lithuania). In North America they live in Canada, Alaska and northern parts of the United States. In 2008 they were re-introduced to Scottish Highlands from Scandinavia. </p>
                 
            <h2> Population</h2>
            <p>There are about 115,000 moose in Finland, and about the same number in Norway. Alaska has about 200,000. Canada and Russia each have between 500,000 and one million. There are also some in the continental United States. The animal is widely distributed.</p>
        
        </div>
    );
};

export default Text;