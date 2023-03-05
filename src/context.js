import axios from "axios";
import React, { createContext, useEffect, useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";


const ProductContext = createContext()

const ProductProvider = (props) => {

    const [paths, setPaths] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null)
    const [image, setImage] = useState(false)
    const [data, setData] = useState()
    const [isLoading, setIsloading] = useState(false);

    let confidence = 0;

    const sendFile = async ()=>{
        if (image) {
            let formData = new FormData()
            formData.append("file", selectedFile)
            let res = await axios.post("https://potato-classification-97z7.onrender.com/predict", formData)
    
            if (res.status === 200) {
                setData(res.data)
            }
            setIsloading(false)
        }
    }

    useEffect(() => {
    if (!image) {
        return;
    }
    setIsloading(true);
    sendFile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [image]);

    const onDrop = useCallback((acceptedFiles) => {
        setPaths(acceptedFiles.map(file => URL.createObjectURL(file)));
        setSelectedFile(acceptedFiles[0])
        setImage(true)

    }, [setPaths]);

    const clearData = () => {
        setData(null);
        setImage(false);
        setSelectedFile(null);
        setPaths([]);
    };

    if (data) {
        confidence = (parseInt(data.confidence * 100));
    }

    const { getRootProps, getInputProps } = useDropzone({ onDrop }); 
    

    return <ProductContext.Provider value={{
        paths,
        image,
        data,
        clearData,
        isLoading,
        getInputProps,
        getRootProps,
        confidence
        
    }}>
        {props.children}
    </ProductContext.Provider>
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }