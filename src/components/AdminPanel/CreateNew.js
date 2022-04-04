export const CreateNew = ({ activeCategory, onClick }) => {
  const getContent = () => {
    switch (activeCategory) {
      case 'cases':
        return 'Добавить новый проект';
      case 'news':
        return 'Добавить новую новость';
      case 'bids':
        return 'Добавить новую заявку';
    }
  };

  if (activeCategory === 'bids') return null;

  return (
    <div className="admin__createNew" onClick={onClick}>
      + {getContent()}
    </div>
  );
};
