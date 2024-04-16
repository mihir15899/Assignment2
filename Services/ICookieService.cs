namespace GBCTravel.Services
{
    public interface ICookieService
    {
        void SetCookie(string key, string value, int? expireTime);

        string GetCookie(string key);

        void DeleteCookie(string key);


    }
}
