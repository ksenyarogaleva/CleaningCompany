﻿using CleaningCompany.Result;
using System.Threading.Tasks;

namespace CleaningCompany.Application.Interfaces
{
    public interface IIdentityService
    {
        Task<string> GetUserNameAsync(string userId);

        Task<bool> IsInRoleAsync(string userId, string role);

        Task<bool> AuthorizeAsync(string userId, string policyName);

        Task<Result<string>> CreateUserAsync(string userName, string password);

        Task<Result<bool>> DeleteUserAsync(string userId);
    }
}
