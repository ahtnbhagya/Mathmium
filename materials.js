/* =====================================================
   MATHMIUM — MATERIALS
   Material Image / GIF Configuration
===================================================== */


/* =====================================================
   PRIMARY MATERIALS
===================================================== */

const primaryMaterials = [

    "Images/Materials/PM/1.jpg",

    "Images/Materials/PM/2.jpg",

    "Images/Materials/PM/3.jpg",

    "Images/Materials/PM/4.jpg",

    "Images/Materials/PM/5.jpg",

    "Images/Materials/PM/6.jpg",

    "Images/Materials/PM/7.jpg"

];



/* =====================================================
   SECONDARY MATERIALS
===================================================== */

const secondaryMaterials = [

    "Images/Materials/SM/1.jpg",

    "Images/Materials/SM/2.jpg",

    "Images/Materials/SM/3.jpg",

    "Images/Materials/SM/4.jpg",

    "Images/Materials/SM/5.jpg",

    "Images/Materials/SM/6.jpg",

    "Images/Materials/SM/7.jpg",

    "Images/Materials/SM/8.jpg",

    "Images/Materials/SM/9.gif",

    "Images/Materials/SM/10.gif",

    "Images/Materials/SM/11.gif",

    "Images/Materials/SM/12.gif",

    "Images/Materials/SM/13.gif"

];



/* =====================================================
   CREATE MATERIAL GALLERY
===================================================== */

function createMaterialGallery(
    files,
    galleryId,
    altPrefix
) {


    const gallery =
        document.getElementById(
            galleryId
        );


    if (
        !gallery ||
        !Array.isArray(files)
    ) {

        return;

    }


    files.forEach(
        function (
            file,
            index
        ) {


            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "material-image-card";



            const image =
                document.createElement(
                    "img"
                );


            image.src =
                file;


            image.alt =
                altPrefix +
                " " +
                (index + 1);


            image.loading =
                "lazy";


            image.decoding =
                "async";



            card.appendChild(
                image
            );


            gallery.appendChild(
                card
            );


        }
    );

}



/* =====================================================
   START
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        createMaterialGallery(
            primaryMaterials,
            "primaryGallery",
            "Primary Mathematics material"
        );


        createMaterialGallery(
            secondaryMaterials,
            "secondaryGallery",
            "Secondary Mathematics material"
        );


    }
);