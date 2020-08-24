package com.config;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.EntityType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

import com.entity.Country;
import com.entity.Product;
import com.entity.ProductCategory;
import com.entity.State;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
	
	private EntityManager entityManager;
	
	@Autowired
	public MyDataRestConfig(EntityManager theEntityManager) {
		this.entityManager = theEntityManager;
	}



	@Override
	public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
		// TODO Auto-generated method stub
		RepositoryRestConfigurer.super.configureRepositoryRestConfiguration(config);
		
		HttpMethod[] theUnsupportedActions = {HttpMethod.PUT, HttpMethod.POST, HttpMethod.DELETE};
		
		// essentially make these entities READ only ...
		// disable HTTP methods for first param: it's CLASS: Put, Post, and Delete
		disableHttpMethods(ProductCategory.class, config, theUnsupportedActions);
		disableHttpMethods(Product.class, config, theUnsupportedActions);
		disableHttpMethods(Country.class, config, theUnsupportedActions);
		disableHttpMethods(State.class, config, theUnsupportedActions);
		
		exposeIds(config);
	}



	private void disableHttpMethods(Class theClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
		config.getExposureConfiguration()
			.forDomainType(theClass)
			.withItemExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions))
			.withCollectionExposure((metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions));
	}



	private void exposeIds(RepositoryRestConfiguration config) {
		
		// get a list of all entity classes from entity manager
		Set<EntityType<?>> entities = entityManager.getMetamodel().getEntities();
		
		List<Class> entityClasses = new ArrayList<>();
		
		for(EntityType tempEntityType : entities) {
			entityClasses.add(tempEntityType.getJavaType());
		}
		
		Class[] domainTypes = entityClasses.toArray(new Class[0]);
		config.exposeIdsFor(domainTypes);
		
	}

}
