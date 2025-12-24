import {useState} from 'react';
import Button from './button';

interface Props {
    OnSearch: (searchTerm: string) => void;
}

function SearchBar({OnSearch}: Props) {
    const[searchTerm, setSearchTerm] = useState('null');

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        OnSearch(searchTerm);
    }

    const setNewValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
       <form onSubmit={handleSubmit} className='flex gap-2'>
        <input type="text" value={searchTerm} onChange={setNewValue} placeholder="Search here..." className="border border-white rounded-md px-2 py-1 w-full text-white text-xs" />
        <Button type="submit">Search</Button>
       </form>
    )
}

export default SearchBar;