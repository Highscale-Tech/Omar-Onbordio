import React from 'react'

function Candidates({searchTerm, handleSearchChange, filteredCandidates, handleCandidateSelect, selectedCandidate}) {

    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
            <input
                type="text"
                className="w-full h-14 p-2 border-2 border-sky-800 shadow-sm rounded-2xl mb-4 bg-blue-100 text-black"
                placeholder="enter candidate email"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <div className="border border-gray-300 rounded p-4">
                {filteredCandidates.map(({ email, id }) => (
                    <div
                        key={id}
                        className={`flex items-center mb-2 p-2 h-14 ${selectedCandidate === email ? 'bg-blue-500 text-white shadow-sm rounded-2xl' : 'border-2 border-sky-800 shadow-sm rounded-2xl bg-white'} cursor-pointer`}
                        onClick={() => handleCandidateSelect(email)}
                    >
                        <p className="flex-1">{email}</p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default Candidates