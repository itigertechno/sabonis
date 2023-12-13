import { useRouteError } from 'react-router-dom';

export function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id='error-page'
      className='absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 '
    >
      <h1 className='text-center font-bold'>Упс!</h1>
      <p>Извините, страница не найдена</p>
    </div>
  );
}
