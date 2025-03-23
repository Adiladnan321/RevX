import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setMessage(null);
    
    try {
      // In a real app, you would call an API endpoint here
      // const response = await forgotPassword(email);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage(`Password reset instructions sent to ${email}. Please check your inbox.`);
    } catch (err: any) {
      setError('Failed to send password reset email. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">Forgot Password??</h1>
      <p className="mb-6 text-gray-400">Not an issue ;)</p>
      
      {message && (
        <div className="bg-green-600 text-white p-4 rounded-lg mb-6 max-w-md">
          {message}
        </div>
      )}
      
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-lg mb-6 max-w-md">
          {error}
        </div>
      )}
      
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
            required
          />
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            className="p-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600"
            onClick={() => navigate('/login')}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className={`p-3 ${
              isLoading ? 'bg-gray-500' : 'bg-white text-black hover:bg-gray-300'
            } rounded-lg flex items-center justify-center min-w-[150px]`}
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-black"></div>
            ) : (
              'Reset Password'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
