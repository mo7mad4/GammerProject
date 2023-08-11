export const TABLE_COLUMNS = (handleDelete) => [
  {
    key: '_id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'email',
    title: 'Email',
  },
  {
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data._id)}>delete</button>
      </div>
    ),
  },
];
