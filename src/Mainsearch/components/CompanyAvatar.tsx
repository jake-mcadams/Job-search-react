import React, {FC} from 'react';
import jobList from '../../data.json'
import {ReactComponent as Logo } from '../../styles/images/photosnap.svg';
import '../../styles/Mainsearch/components/JobListing.css';

const importReturn =(jobList:any)=>{
    jobList.forEach((job: { company: string; logo: any; })=> {
        // console.log(`${job.company}Avatar`)
        // console.log(`import ${job.company.replace(/\s+/g, '')}Avatar from '${job.logo}'`)
        return `import ${job.company.replace(/\s+/g, '')}Avatar from '${job.logo}'`
    })
}



console.log(importReturn(jobList))

const CompanyAvatar:FC=()=>{

    return (
        <>
            
                <Logo></Logo>
            
        </>
    )
}

export default CompanyAvatar;