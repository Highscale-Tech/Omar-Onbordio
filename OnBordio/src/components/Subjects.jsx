import React from 'react'

function Subjects({ subjects, handleSubjectSelect, selectedSubject }) {
    return (
        <div className="w-full md:w-1/3 px-2 mb-4">
            <div className="border border-gray-300 rounded p-4">
                {subjects.map(({ subject, id }) => (
                    <div
                        key={id}
                        className={`p-2 mb-4 ${selectedSubject === subject ? 'bg-blue-500 text-white' : 'bg-white hover:bg-blue-200'}  border-2 border-sky-800 shadow-sm rounded-2xl rounded cursor-pointer h-14`}
                        onClick={() => handleSubjectSelect(subject)}
                    >
                        {subject}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Subjects