﻿using CleaningCompany.Domain.Interfaces;
using System;

namespace CleaningCompany.Infrastructure.Implementations
{
    internal class UnitOfWork : IUnitOfWork
    {
        private readonly ApplicationContext _context;

        public IMaterialRepository Materials { get; private set; }

        public IProductRepository Products { get; private set; }

        public IOrderRepository Orders { get; private set; }

        public UnitOfWork(ApplicationContext context)
        {
            _context = context;

            Materials = new MaterialRepository(_context);
            Products = new ProductRepository(_context);
            Orders = new OrderRepository(_context);

        }

        public void Dispose()
        {
            GC.SuppressFinalize(this);
        }
    }
}