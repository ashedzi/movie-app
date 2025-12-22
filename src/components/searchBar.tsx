import {useState} from 'react';
import Button from './button';

interface Props {
    children: React.ReactNode;
}

function SearchBar({children}: Props) {
    return (
       <form className='flex gap-2'>
        <input type="text" placeholder="Search here..." className="border border-white rounded-md px-2 py-1 w-full text-white text-xs"></input>
        <Button type="submit">Search</Button>
       </form>
    )
}

export default SearchBar;