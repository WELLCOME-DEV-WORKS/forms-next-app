'use client';
import { FC, useState } from 'react';
import { Button } from '../ui/details/Button';
import { signIn } from 'next-auth/react';
import { Icons } from '../ui/details/Icons';
import { useToast } from '@/hooks/use-toast';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const loginWithGoogle = async () => {
    setIsLoading(true);

    try {
      await signIn('google');
    } catch (error) {
      // toast notification
      toast({
        title: 'There was a problem',
        description: 'There was an error with Google Login',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex justify-center">
      <Button
        onClick={loginWithGoogle}
        isLoading={isLoading}
        size="sm"
        className="w-full"
      >
        {isLoading ? null : (
          <Icons.google className="h-4 w-4 mr-2"> </Icons.google>
        )}
        Google
      </Button>
    </div>
  );
};

export default UserAuthForm;
