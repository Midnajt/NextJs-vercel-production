'use client';
import { deleteTask } from '@/utils/action';
import { useFormStatus } from 'react-dom';

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className="btn btn-xs btn-error uppercase" disabled={pending}>
      {pending ? 'pending...' : 'Delete'}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <SubmitButton />
    </form>
  );
};
export default DeleteForm;
